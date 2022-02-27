import './QA.css';

function QA() {

  const addBookmark1 = () => {
    document.getElementById("bookmark_empty_1").classList.add("none")
    document.getElementById("bookmark_filled_1").classList.remove("none")
    document.getElementById("bookmark_small_1").classList.remove("none")
  }

  const removeBookmark1 = () => {
    document.getElementById("bookmark_empty_1").classList.remove("none")
    document.getElementById("bookmark_filled_1").classList.add("none")
    document.getElementById("bookmark_small_1").classList.add("none")
  }

  const addBookmark2 = () => {
    document.getElementById("bookmark_empty_2").classList.add("none")
    document.getElementById("bookmark_filled_2").classList.remove("none")
    document.getElementById("bookmark_small_2").classList.remove("none")
  }

  const removeBookmark2 = () => {
    document.getElementById("bookmark_empty_2").classList.remove("none")
    document.getElementById("bookmark_filled_2").classList.add("none")
    document.getElementById("bookmark_small_2").classList.add("none")
  }

  const showHint = () => {
      document.getElementById("overlay").classList.add("open")
      document.getElementById("hint-container").classList.add("open")
  }

  const hideHint = () => {
    document.getElementById("overlay").classList.remove("open")
    document.getElementById("hint-container").classList.remove("open")
  }

  return (
    <>
      <nav className="nav-container">

        <div className="logo-container">
            <a href="/#" className="logo">
                <img src={require('./qa_images/logo2.png')} alt="qualifly_logo"/>
            </a>
        </div>

        <div className="menu">
            <button className="menu-btn"><img src={require('./qa_images/menu.png')} alt="menu_logo"/></button>
            <div className="dropdown">
                <p>Content</p>
            </div>
        </div>

        <div className="chalkboard-frame">
            <div>Algebra Practice</div>
        </div>

        <div className="timer">
            <img src={require('./qa_images/timer.png')} alt="timer_logo"/> 1:09
        </div>

        <div className="progress">
            <div className="in-progress"></div>
        </div>

        <ul className="sidebar-questions">
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 1</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_1"/>
                </div>
                <img src={require('./qa_images/checkbox_ticked.png')} alt="checkbox_ticked_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 2</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_2"/>
                </div>
                <img src={require('./qa_images/checkbox_ticked.png')} alt="checkbox_ticked_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 3</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_3"/>
                </div>
                <img src={require('./qa_images/checkbox_ticked.png')} alt="checkbox_ticked_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 4</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_4"/>
                </div>
                <img src={require('./qa_images/checkbox_ticked.png')} alt="checkbox_ticked_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 5</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_5"/>
                </div>
                <img src={require('./qa_images/checkbox.png')} alt="checkbox_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 6</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_6"/>
                </div>
                <img src={require('./qa_images/checkbox.png')} alt="checkbox_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 7</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_7"/>
                </div>
                <img src={require('./qa_images/checkbox.png')} alt="checkbox_logo"/>
            </li>
            <li className="sidebar-question">
                <div className="q-container">
                    <div>Question 8</div>
                    <img src={require('./qa_images/bookmarked_small.png')} alt="bookmarked_small_logo" className="bookmarked-small none" id="bookmark_small_8"/>
                </div>
                <img src={require('./qa_images/checkbox.png')} alt="checkbox_logo"/>
            </li>
        </ul>
      </nav>

      <main>
        <div className="top-bar">
            <div className="top-bar-left">
                <button className="pause-btn">Pause</button>
            </div>

            <div className="top-bar-right">
                <button className="save-btn">Save</button>
                <button className="submit-btn">Submit</button>
                <div className="avatar-container">
                    <a href="/#" className="avatar">
                        <img src={require('./qa_images/avatar.png')} alt="avatar_logo"/>
                    </a>
                </div>
            </div>
        </div>

        <div className="instruction">
            Please read the questions and pick the best answer from the following options.
        </div>

        <div className="questions-container">
            <div className="questions-header">
                <div className="bookmarks">
                    <img src={require('./qa_images/bookmark_empty.png')} alt="bookmark_empty_logo" className="bookmark-empty" id="bookmark_empty_1" onClick={addBookmark1}/>
                    <img src={require('./qa_images/bookmark_filled.png')} alt="bookmark_filled_logo" className="bookmark-filled none" id="bookmark_filled_1" onClick={removeBookmark1}/>
                </div>

                <div className="questions-text">Question 1</div>

                <img src={require('./qa_images/difficulty_1.png')} alt="difficulty_1_logo" className="difficulty-pics"/>
            </div>

            <div className="questions-question">How many apples do you see? (3 marks)</div>

            <div className="question-1-pic">
                <img src={require('./qa_images/question_1.png')} alt="question_1_pic"/>
            </div>

            <div className="questions-options">
                <div className="questions-options-row1">
                    <div className="questions-option">A. 6</div>
                    <div className="questions-option">B. 3</div>
                </div>

                <div className="questions-options-row2">
                    <div className="questions-option">C. 4</div>
                    <div className="questions-option">D. 1</div>
                </div>

                <div className="questions-options-row3">
                    <div className="questions-option">E. I am not sure</div>
                </div>
            </div>
        </div>

        <div className="questions-container">
            <div className="questions-header">
                <div className="bookmarks">
                    <img src={require('./qa_images/bookmark_empty.png')} alt="bookmark_empty_logo" className="bookmark-empty" id="bookmark_empty_2" onClick={addBookmark2}/>
                    <img src={require('./qa_images/bookmark_filled.png')} alt="bookmark_filled_logo" className="bookmark-filled none" id="bookmark_filled_2" onClick={removeBookmark2}/>
                </div>

                <div className="questions-text">Question 2</div>
                
                <img src={require('./qa_images/difficulty_2.png')} alt="difficulty_2_logo" className="difficulty-pics"/>
                <img src={require('./qa_images/hint.png')} alt="hint_logo" className="hint-pics" onClick={showHint}/>
            </div>

            <div className="questions-question">Which of the following is correct? (4 marks)</div>

            <div className="question-2-pic">
                <img src={require('./qa_images/question_2.png')} alt="question_2_pic"/>
            </div>

            <div className="questions-options">
                <div className="questions-options-row1">
                    <div className="questions-option">
                        A. <img src={require('./qa_images/question_2_triangle.png')} alt="triangle_logo"/> is heavier than <img src={require('./qa_images/question_2_circle.png')} alt="circle_logo"/>
                    </div>
                    <div className="questions-option">
                        B. <img src={require('./qa_images/question_2_six_squares.png')} alt="six_squares_logo"/> is heavier than <img src={require('./qa_images/question_2_circle.png')} alt="circle_logo"/>
                    </div>
                </div>

                <div className="questions-options-row2">
                    <div className="questions-option">
                        C. <img src={require('./qa_images/question_2_triangle.png')} alt="triangle_logo"/> is lighter than <img src={require('./qa_images/question_2_six_squares.png')} alt="six_squares_logo"/>
                    </div>
                    <div className="questions-option">
                        D. <img src={require('./qa_images/question_2_circle.png')} alt="circle_logo"/> is lighter than <img src={require('./qa_images/question_2_five_squares.png')} alt="five_squares_logo"/>
                    </div>
                </div>

                <div className="questions-options-row3">
                    <div className="questions-option">E. I am not sure</div>
                </div>
            </div>

            <div id="overlay" onClick={hideHint}></div>

            <div id="hint-container">
                <div className="text-container">
                    <div className="hint-text">Hint:</div>
                    <div className="hint-text">XXXXXXXXXXXXXXXXXXX</div>
                    <div className="hint-text">YYYYY</div>
                </div>
                <img src={require('./qa_images/you_can_do_it.png')} alt="you_can_do_it" id="you-can-do-it"/>
            </div>
        </div>
      </main>
    </>
  );
}

export default QA;
