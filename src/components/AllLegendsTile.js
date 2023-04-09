//home page tile component to show "All Legends"
const AllLegendsTile = () => {
    const title = "All Legends"
    return (
        <>
            <a href="/legends" className="rec-tile">
                        <h1 className="title">{title}</h1>
            </a>
        </>
    )
}

export default AllLegendsTile