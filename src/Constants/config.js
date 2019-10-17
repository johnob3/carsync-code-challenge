// google map api key
export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_API_KEY;
// colors to shuffle trough
export const COLORS = ["#3772FF", "#F038FF", "#EF709D", "#9C0D38", "#223127"];
// layout variables
export const drawerWidth = 240;
export const navbarBGColor = "rgba(99, 88, 88, 0.70)";
export const sidebarBGColor = "rgb(144, 137, 137)";
// map options
export const center = { lat: 40.689292, lng: -74.044507 };
export const zoom = 8;
export const defaultOptions = {
    fullscreenControl: false,
    disableDoubleClickZoom: true
};
// regexp
export const latRegExp = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
export const lngRegExp = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
