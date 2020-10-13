export const timeStampToDate = dateObj => {
    let ts = dateObj.seconds * 1000;
    const newDateObj = new Date(ts)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return(`${daysOfWeek[newDateObj.getDay()]}, ${newDateObj.getDate()} ${months[newDateObj.getMonth()]} ${newDateObj.getFullYear()}`);
}

export const dateBeforeDeadline = dateObj => {
    let today = new Date();
    const deadline = new Date(dateObj.seconds * 1000);
    const difference = deadline.getTime() - today.getTime();
    const daysLeft = (Math.ceil(difference/ (1000 * 3600 * 24)));
    if(daysLeft === 0)  {
        return "Deadline=> Today"
    } else if(daysLeft < 0 ) {
        return `Overdue ~ ${Math.abs(daysLeft)} days ago`
    } else {
        return `Deadline ~ ${daysLeft} days left`;
    }
}

export const dateAfterCompletion = dateObj => {
    let today = new Date();
    const deadline = new Date(dateObj.seconds * 1000);
    const difference = deadline.getTime() - today.getTime();
    const daysLeft = (Math.ceil(difference/ (1000 * 3600 * 24)));
    if(daysLeft === 0)  {
        return "Completed => Today"
    } else if(daysLeft < 0 ) {
        return `Completed ~ ${Math.abs(daysLeft)} days ago`
    } else {
        return `Completed ~ ${daysLeft} days left`;
    }
}