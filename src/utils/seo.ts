export const updateDocumentMeta = (title: string, description: string) => {
  document.title = `${title} | MomentCrafts`;

  const descriptionTag = document.querySelector("meta[name='description']");
  if (descriptionTag) {
    descriptionTag.setAttribute("content", description);
  }
};
