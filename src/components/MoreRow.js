import AllLegendsTile from "./AllLegendsTile"
import LoadoutTile from "./LoadoutTile"

const MoreRow = () => {
    return (
        <>
            <div className="row v-spacer">
                <AllLegendsTile />
                <LoadoutTile />
            </div>
        </>
    )
}

export default MoreRow