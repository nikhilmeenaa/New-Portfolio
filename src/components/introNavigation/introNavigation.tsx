import "./introNavigation.css";

const IntroNavigation = () => {
  const characters = ["W", "e", "l", "c", "o", "m", "e"];
  return (
    <div className="introNavigationContainer">
      <div className="wordsContainerWrapper">
        <div className="wordsContainer">
          {characters.map((characterData, index) => {
            return (
              <div
                className="characterInstance"
                key={"characterInstance" + index}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {characterData}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntroNavigation;
