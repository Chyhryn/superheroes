import {
  Button,
  CurrentButton,
  PaginationContainer,
} from "./pagination.styled";

export const Pagination = ({ totalPages, handlePageChange, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (currentPage * 1 === i) {
      pages.push(
        <CurrentButton disabled key={i} onClick={() => handlePageChange(i)}>
          {i}
        </CurrentButton>
      );
    } else {
      pages.push(
        <Button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </Button>
      );
    }
  }

  return <PaginationContainer>{pages}</PaginationContainer>;
};
