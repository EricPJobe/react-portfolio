import React from 'react';
import '../../structure.css';
import './GNTReader.css';
import reader from '../../assets/reader.png'
import getInfo from '../../assets/get-info.png'
import createFlashcard from '../../assets/create-flashcard.png'
import selectBook from '../../assets/select-book.png'
import trainer from '../../assets/trainer.png'

const GNTReader = () => (

    <div className={"container"}>
        {/*<div className={"flex-one"}> </div>*/}
        <div className={"text-container"}>
            <h1 className={"title"}>Greek New Testament Reader</h1>
        </div>
        <div className={"gnt-container"}>
            <div>
                <ul>
                    <li>
                        <img src={reader} height={1000} alt={"reader"} className={"image"}/>
                    </li>
                    <li>
                        <img src={getInfo} height={1000} alt={"get-info"} className={"image"}/>
                    </li>
                    <li>
                        <img src={createFlashcard} height={1000} alt={"create-flashcard"} className={"image"}/>
                    </li>
                    <li>
                        <img src={selectBook} height={1000} alt={"select-book"} className={"image"}/>
                    </li>
                    <li>
                        <img src={trainer} height={1000} alt={"trainer"} className={"image"}/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default GNTReader;
