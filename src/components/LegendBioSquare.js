const LegendBioSquare = ({legend}) => {

    return (
        <>
            <div className="container">
                <div className="legend-bio ">
                    <h3>Legend Name: {legend.legendName} </ h3>
                    <h3>Real Name: {legend.realName} </ h3>
                    <h3>Age: {legend.age} </ h3>
                    <h3>Home World: {legend.homeWorld} </ h3>
                    <h3>Class: {legend.class} </ h3>
                    <h3>Tactical Ability: {legend.tacticalAbility} </ h3>
                    <h3>Passive Ability: {legend.passiveAbility} </ h3>
                    <h3>Ultimate Ability: {legend.ultimateAbility} </ h3>
                </div>
            </div>
        </>
    )
}

export default LegendBioSquare;