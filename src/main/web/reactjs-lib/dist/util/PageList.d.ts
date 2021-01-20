export default class PageList {
    pageSize: number;
    available: number;
    availablePage: number;
    currentPage: number;
    list: Array<any>;
    currentListPage: Array<any> | null;
    constructor(pageSize: number, list: Array<any>);
    setList(list: Array<any>): void;
    getPageSize(): number;
    setPageSize(pageSize: number): void;
    getCurrentPage(): number;
    getAvailable(): number;
    getAvailablePage(): number;
    getDataList(): any[];
    getPrevPage(): number;
    getNextPage(): number;
    getItemInPage(idx: number): any;
    currentPageItems(): Array<any>;
    getPage(page: number): any[] | null;
    checkAndSetPage(page: number): void;
    setAvailablePage(available: number): void;
    getFrom(): number;
    getTo(): number;
    computeRowIndexOf(page: number, rowInPage: number): number;
    getItemOnCurrentPage(idx: number): any;
    removeItemOnCurrentPage(idx: number): void;
    getSubRange(page: number, rangeSize: number): Array<number>;
    populateCurrentPage(): void;
}