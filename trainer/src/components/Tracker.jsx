// object to hold svgs and meta
const rewards = {
    day1: {
        // invitation to tryouts
        svg: '/',
        msg: 'First Day'
    },
    week1: {
        // make the team
        svg: '/team.svg',
        msg: 'First Week'
    },
    day10: {
        // go to nationals
        svg: '',
        msg: '10 Day Streak'
    },
    week3: {
        // made mvp
        svg: '/mvp.svg',
        msg: '3 week Streak'
    },
    week6: {
        // invitation to US olympic team
        svg: '/',
        msg: '6 Week Streak, begin advanced training'
    },
    day20: {
        svg: '/bronze.svg',
        msg: '20 Day Streak'
    },
    week9: {
        svg: '/silver.svg',
        msg: '9 Weeks Streak'
    },
    day30: {
        svg: '/gold.svg',
        msg: '30 day Streak'
    },
    complete: {
        svg: '/trophy.svg',
        msg: 'You Did It'
    }
}

export default function Tracker() {
    return (
        <>
        <img id="reward" src={rewards.complete.svg} alt="reward" />
            <h1>Congratulations</h1>
        </>
    )
}