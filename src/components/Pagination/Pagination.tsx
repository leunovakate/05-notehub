import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from "./Pagination.module.css";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate =
  (
    ReactPaginateModule as unknown as ModuleWithDefault<
      ComponentType<ReactPaginateProps>
    >
  ).default ??
  (ReactPaginateModule as unknown as ComponentType<ReactPaginateProps>);

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
      activeClassName={css.active}
      previousClassName={css.previous}
      nextClassName={css.next}
      disabledClassName={css.disabled}
      breakClassName={css.break}
      previousLabel="<"
      nextLabel=">"
    />
  );
};

export default Pagination;
