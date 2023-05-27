import { Button, PaginationContainer } from "./pagination.styled";

export const Pagination = ({ totalPages, handlePageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Button key={i} onClick={() => handlePageChange(i)}>
        {i}
      </Button>
    );
  }

  return <PaginationContainer>{pages}</PaginationContainer>;
};
