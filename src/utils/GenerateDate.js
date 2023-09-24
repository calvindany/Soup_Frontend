export function FormatDate(date) {
    const strDate = date.toString().split(' ');

    return `${strDate[0]}, ${strDate[2]} ${strDate[1]} ${strDate[3]}`
}

export function AddDay(date, increment) {
    const temp = new Date(date);

    temp.setDate(temp.getDate() + increment);

    return temp;
}

export function GenerateOneWeekDate() {
    // const date = new Date();
    const schedule = [];

    for(let i = 0; i < 7; i++){
        schedule.push(FormatDate(AddDay(Date.now(), i)))
    }
    // console.log(schedule);
    return schedule;
}