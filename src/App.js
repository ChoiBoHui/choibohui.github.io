import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import data from './portfolioDATA';
import './main.scss'

const App = () => {
    const [num, setNum] = useState(1);
    const [con, setCon] = useState('cover');
    const [on, setOn] = useState(false);
    const ac = data.map(it => it.anchor);
    const Cover = () => {
        return <div className={`cover ${on ? 'on' : ''}`}>나는 커버임</div>
    }

    return (
        <div className='PF'>
            <Cover />
            <header>
                2023 choi portfolio {num} {con}
                <button onClick={() => setOn(!on)}>커버가 나오는 버튼</button>
            </header>
            <nav className='gnb'>
                <ul>
                    {
                        ['cover', ...ac, 'copyright'].map((it, idx) => {
                            return (
                                <li className={num === (idx + 1) ? 'on' : ''}>
                                    <a href={`#${it}`}>{it}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...ac, 'copyright']}
                afterLoad={(origin, destination) => {
                    setNum(destination.index + 1);
                    setCon(destination.ancor);
                }
                }

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p>Section 1 (welcome to fullpage.js)</p>
                                <a href="#pf01">01</a>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
                                </button>
                            </div>
                            {
                                data.map(it => {
                                    return (
                                        <div className="section">
                                            <p>{it.id}</p>
                                        </div>
                                    )
                                })
                            }

                            <div className="section">
                                <p>Section 3</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    )
}

export default App;