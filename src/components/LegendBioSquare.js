const LegendBioSquare = ({legend, isToggled}) => {

    return (
        <>
            <div className={isToggled ? 'bio-container' : 'hidden'}>
                <div className="legend-bio ">
                    <div className="legend-bio-header"></div>
                    <h3 className="h-spacer">Legend Name: {legend.legendName} </ h3>
                    <h3 className="h-spacer">Real Name: {legend.realName} </ h3>
                    <h3 className="h-spacer">Age: {legend.age} </ h3>
                    <h3 className="h-spacer">Home World: {legend.homeWorld} </ h3>
                    <h3 className="h-spacer">Class: {legend.class} </ h3>
                    <h3 className="h-spacer">Tactical Ability: {legend.tacticalAbility} </ h3>
                    <h3 className="h-spacer">Passive Ability: {legend.passiveAbility} </ h3>
                    <h3 className="h-spacer">Ultimate Ability: {legend.ultimateAbility} </ h3>
                </div>
            </div>
        </>
    )
}

export default LegendBioSquare;