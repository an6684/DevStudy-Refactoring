import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

function Card({subject}){
    const [card, setCard]=useState([]);

    useEffect(()=>{
        //로컬 스토리지에서 데이터를 가져와 card 상태에 설정
        const localStorageData=[];
        for(let i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            const data=JSON.parse(localStorage.getItem(key));
            localStorageData.push(data);
        }
        setCard(localStorageData);
    }, []);

    //띄어쓰기가 포함된 문자열을 url에 사용 가능한 형식으로 변환하는 함수
    const formatUrl = (string) => {
        return encodeURIComponent(string);
    };

    return(
        <>
            {card.map((data, index) => {
                //로컬스토리지의 subject와 datas.title 값이 같을 경우에만 카드 생성
                if(subject===data.subject){
                    const linkUrl = `/avi?subject=${formatUrl(data.subject)}&title=${formatUrl(data.title)}&content=${formatUrl(data.content)}`;
                    return(
                        <div key={index} className="card">
                            <Link to={linkUrl}>
                                <span className="subject">{data.subject}</span>
                                <span className="title">{data.title}</span>
                                <span className="content">{data.content}</span>
                                <embed controls src={`https://img.youtube.com/vi/${data.url}/maxresdefault.jpg`} allowfullscreen></embed>
                            </Link>
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
}

export default Card;