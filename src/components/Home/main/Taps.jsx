const Taps = (setCurMembers) => {
  <section className="btn-section">
    <button onClick={() => {setCurMembers("유진")}}>유진</button>
    <button onClick={() => {setCurMembers("가을")}}>가을</button>
    <button onClick={() => {setCurMembers("레이")}}>레이</button>
    <button onClick={() => {setCurMembers("원영")}}>원영</button>
    <button onClick={() => {setCurMembers("리즈")}}>리즈</button>
    <button onClick={() => {setCurMembers("이서")}}>이서</button>
  </section>
}

export default Taps