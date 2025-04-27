/**
 * Determine if the current time is in this range _in any time zone_.
 *
 * For example, if for `currentlyAnywhere("04-09", "04-09")` returns true
 * if it is April 9th in any timezone, covering a total timespan of 50 hours.
 *
 * @param {string} start start date in "ISO" format (MM-DD)
 * @param {string} end end date in "ISO" format (MM-DD)
 * @returns true if the current time falls within this range
 */
export function currentlyAnywhere(start, end) {
    const now = new Date();
    const year = now.getFullYear();
    const time = now.getTime();

    const startTime = new Date(`${year}-${start}T00:00:00+1400`).getTime();
    const endTime = new Date(`${year}-${end}T23:59:59-1200`).getTime();

    return time >= startTime && time <= endTime;
}
