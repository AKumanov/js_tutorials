window.addEventListener("load", solve);

function solve() {
  const titleElement = document.getElementById("post-title");
  const categoryElement = document.getElementById("post-category");
  const contentElement = document.getElementById('post-content');
  let currentTitle = "";
  let currentCategory = "";
  let currentContent = "";
  const publushBtn = document.getElementById('publish-btn');
  const editBtn = document.createElement('button');
  editBtn.classList.add("action-btn");
  editBtn.classList.add("edit");
  editBtn.textContent = "Edit";
  const approveBtn = document.createElement("button");
  approveBtn.textContent = "Approve";
  approveBtn.classList.add("action-btn");
  approveBtn.classList.add("approve");
  const ulElement = document.getElementById("review-list");
  const publishedListElement = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");

  const handlePublishEvent = () => {
    if (!titleElement.value || !categoryElement.value || !contentElement.value) return;

  currentTitle = titleElement.value;
  currentCategory = categoryElement.value;
  currentContent = contentElement.value;

    let liElement = document.createElement("li");
    liElement.classList.add("rpost");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = titleElement.value;
    let pCategory = document.createElement("p");
    pCategory.textContent = `Cagegory: ${categoryElement.value}`
    let pContent = document.createElement("p");
    pContent.textContent = `Content: ${contentElement.value}`
    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pContent);
    liElement.appendChild(article);
    // liElement.innerHTML = `
    //   <article>
    //     <h4>${titleElement.value}</h4>
    //     <p>Category: ${categoryElement.value}</p>
    //     <p>Content: ${contentElement.value}</p>
    //   </article>
    // `;
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    ulElement.appendChild(liElement);
    titleElement.value = "";
    categoryElement.value = "";
    contentElement.value = "";
  };

  const handleEditEvent = (e) => {
    titleElement.value = currentTitle;
    categoryElement.value = currentCategory;
    contentElement.value = currentContent;
    const targetLi = e.target.closest('.rpost');
    ulElement.removeChild(targetLi);
  };

  const handleApproveEvent = (e) => {
    const targetLi = e.target.closest('.rpost');
    targetLi.removeChild(editBtn);
    targetLi.removeChild(approveBtn);
    publishedListElement.appendChild(targetLi);
    ulElement.removeChild(targetLi);
  };

  const handleClearEvent = (e) => {
    publishedListElement.replaceChildren()
  }

  publushBtn.addEventListener('click', handlePublishEvent);
  editBtn.addEventListener('click', handleEditEvent);
  approveBtn.addEventListener('click', handleApproveEvent);
  clearBtn.addEventListener('click', handleClearEvent);
}
