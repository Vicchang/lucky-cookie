
function database (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 
// anti-pattern! keep reading...
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}