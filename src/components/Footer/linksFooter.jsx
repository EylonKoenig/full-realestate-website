import React from 'react';
import {linksData} from "../../data-app/popular-section links";

class LinksFooter extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loopActive: false,
            shuffleActive: false,
        }
    }

    render() {
        function show(id, icon) {
            let el = document.getElementById(`hi${id}`);
            let ic = document.getElementById(icon);
            if (el.style.display === 'none') {
                el.style.display = "block";
                document.getElementById(`showMore${id}`).innerHTML = 'Show Less';
                ic.style.transform = "rotate(180deg)";

            } else {
                el.style.display = "none";
                ic.style.transform = "none";
                document.getElementById(`showMore${id}`).innerHTML = 'Show More';
            }
        }
        function createTopLink  (menuContent){
            let linkToShow = 6;
            let table = [];
            for(let menuLink = 0 ; menuLink < linkToShow; menuLink++){
                table.push(<li key={menuLink}><a href={menuContent[menuLink].herfLink}>{menuContent[menuLink].title}</a></li>)
            }
            return table;
        }
        function hiddenLinks(menuContent) {
            let linkToShow = 6;
            let linkToHide = linkToShow;
            let hiddenlinks = [];
            for (let menuLink=linkToHide; menuLink<menuContent.length;menuLink++){
                hiddenlinks.push(<li key={menuLink}><a href={menuContent[menuLink].herfLink}>{menuContent[menuLink].title}</a></li>)
            }
            return hiddenlinks
        }
        return (
                <div className="container-fluid popular-section border-style" >
                    <div className="row m-auto" style={{width:'90%'}}>
                        {linksData.map(function (item,i) {
                            return <div key={i} className="col-sm-6 col-md-3 links-section">
                                        <p>{item.mainTitle}</p>
                                        <ul key={i} className="popular-section-list">
                                            {createTopLink(item.menuContent)}
                                            <div id={`hi${i}`} style={{display: 'none'}}>
                                                {hiddenLinks(item.menuContent)}
                                            </div>
                                        </ul>
                                        <button type="button" onClick={() => show(`${i}`,`ul-icon${i}`)}>
                                            <span id={`showMore${i}`}>Show more</span>
                                            <i id={`ul-icon${i}`} className="fas fa-arrow-down">
                                            </i>
                                        </button>
                                   </div>

                        })}
                    </div>
                </div>
        )
    }
}


export default LinksFooter;