import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

interface ClearIconProps {
  handleClearFile: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function InputFileUpload() {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]; // Optional chaining to handle null/undefined
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleTextFieldClick = () => {
    fileInputRef.current?.click(); // Safe optional chaining
  };

  const handleClearFile = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFile(null);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        // accept=".pdf,.doc,.docx,.jpg,.png" // Uncomment if needed
      />

      <TextField
        fullWidth
        name="company_name"
        label="Logo"
        variant="outlined"
        value={fileName}
        onClick={handleTextFieldClick}
        InputProps={{
          readOnly: true,
          endAdornment: fileName ? (
            <ClearIcon handleClearFile={handleClearFile} />
          ) : (
            <IconButton size="small" onClick={handleTextFieldClick}>
              <CloudUploadIcon />
            </IconButton>
          ),
        }}
        placeholder="Click to upload file"
        sx={{ cursor: "pointer" }}
        required
      />
    </Box>
  );
}

function ClearIcon({ handleClearFile }: ClearIconProps) {
  return (
    <IconButton size="small" onClick={handleClearFile}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );
}
