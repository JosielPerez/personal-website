function resume() {
  return (
    <embed
      height={`100%`}
      width={`100%`}
      style={{ position: "absolute" }}
      src="resume.pdf"
      type="application/pdf"
    />
  );
}

export default resume;
