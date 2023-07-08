import { styled, Paper, Box } from "@mui/material";
export const Info = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: "flex",
  margin: theme.spacing(0.8),
  alignItems: "center",
  justifyContent: "space-between",
  textAlign: "center",
  fontSize: "16px",
  color: theme.palette.text.secondary,
}));

export function Item({ children }) {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      }}
    >
      {children}
    </Box>
  );
}
