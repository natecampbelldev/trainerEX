// object to hold svgs and meta
const rewards = {
    1: {
        // invitation to tryouts
        svg: '/scroll.svg',
        msg: 'First Day'
    },
    7: {
        // make the team
        svg: '/team.svg',
        msg: 'First Week'
    },
    10: {
        // go to nationals
        svg: '/volleyball-blue.svg',
        msg: '10 Day Streak'
    },
    21: {
        // made mvp
        svg: '/mvp.svg',
        msg: '3 week Streak'
    },
    30: {
        // invitation to US olympic team
        svg: '/scroll.svg',
        msg: '30 Day Streak'
    },
    42: {
        svg: '/bronze.svg',
        msg: '6 Week Streak, begin advanced training'
    },
    60: {
        svg: '/silver.svg',
        msg: '60 Day Streak'
    },
    70: {
        svg: '/gold.svg',
        msg: '10 Week Streak'
    },
    84: {
        svg: '/trophy.svg',
        msg: 'You Did It'
    }
}



export default function Tracker({reward}) {    
    return (
        <>
        <img id="reward" src={rewards[reward]?.svg || 'volleyball-green.svg'} alt="reward" />
            <h1>Congratulations</h1>
        </>
    )
}