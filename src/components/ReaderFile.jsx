function ReaderFile({ onlyTxt = true, setPlaintext, setCiphertext }) {
  function onChange(event) {
    var file = event.target.files[0];
    if (!file) return; // Ensure a file is selected

    const reader = new FileReader();

    const fileName = file.name;
    const extension = fileName
      .slice(fileName.lastIndexOf(".") + 1)
      .toLowerCase();

    if (extension == "txt") {
      reader.readAsText(file);
    } else {
      reader.readAsDataURL(file);
    }

    reader.onload = (event) => {
      const fileContent = event.target.result; // File content as string
      setPlaintext(fileContent); // Do something with the string
      setCiphertext(fileContent);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  }

  return (
    <div className="">
      <label htmlFor="fileUpload">Upload File</label>
      <div className="">
        {onlyTxt ? (
          <input
            id="fileUpload"
            accept=".txt"
            onClick={(e) => (e.target.value = null)}
            onChange={(e) => onChange(e)}
            type="file"
          />
        ) : (
          <input
            id="fileUpload"
            onClick={(e) => (e.target.value = null)}
            onChange={(e) => onChange(e)}
            type="file"
          />
        )}
      </div>
    </div>
  );
}

export default ReaderFile;
