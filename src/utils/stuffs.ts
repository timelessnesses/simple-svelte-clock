const things = {
    date_to_string: function(date: Date = new Date()){
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    },
    sleep: function (ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}
export default things;