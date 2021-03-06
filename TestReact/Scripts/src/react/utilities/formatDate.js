export const formatDate = (date) =>{
    if (!date || !date.getHours) return "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    var strTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}  ${strTime}`;
};    
