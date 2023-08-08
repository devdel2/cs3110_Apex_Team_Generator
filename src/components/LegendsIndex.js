import LegendSquare from './LegendSquare';

function LegendIndex ({ getLegend, hideMe }){

    return (
        <>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={0} getLegend={getLegend}/>
                < LegendSquare legend={1} getLegend={getLegend}/>
                < LegendSquare legend={2} getLegend={getLegend}/>
                < LegendSquare legend={3} getLegend={getLegend}/>
            </div>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={4} getLegend={getLegend}/>
                < LegendSquare legend={5} getLegend={getLegend}/>
                < LegendSquare legend={6} getLegend={getLegend}/>
                < LegendSquare legend={7} getLegend={getLegend}/>
            </div>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={8} getLegend={getLegend}/>
                < LegendSquare legend={9} getLegend={getLegend}/>
                < LegendSquare legend={10} getLegend={getLegend}/>
                < LegendSquare legend={11} getLegend={getLegend}/>
            </div>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={12} getLegend={getLegend}/>
                < LegendSquare legend={13} getLegend={getLegend}/>
                < LegendSquare legend={14} getLegend={getLegend}/>
                < LegendSquare legend={15} getLegend={getLegend}/>
            </div>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={16} getLegend={getLegend}/>
                < LegendSquare legend={17} getLegend={getLegend}/>
                < LegendSquare legend={18} getLegend={getLegend}/>
                < LegendSquare legend={19} getLegend={getLegend}/>
            </div>
            <div className='container legends-index hover-me' onClick={hideMe}>
                < LegendSquare legend={20} getLegend={getLegend}/>
                < LegendSquare legend={21} getLegend={getLegend}/>
                < LegendSquare legend={22} getLegend={getLegend}/>
                < LegendSquare legend={23} getLegend={getLegend}/>
            </div>
        </>
    )
}

export default LegendIndex