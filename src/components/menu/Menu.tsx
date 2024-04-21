import { Link, useNavigate } from "react-router-dom";

type PropsType = {
    responsivenessStyle?: string;
    textMenu?: [string, string, (() => void)?][];
    buttonMenu?: [string, string, (() => void)?][];
    textMenuStyle?: string;
    buttonMenuStyle?: string;
};

function Menu({
    responsivenessStyle,
    textMenu,
    buttonMenu,
    buttonMenuStyle,
    textMenuStyle,
}: PropsType) {
    const navigate = useNavigate();
    return (
        <div className={responsivenessStyle}>
            {textMenu && textMenu?.length > 0
                ? textMenu.map((item) => {
                      return (
                          <Link
                              className={textMenuStyle}
                              key={item[0]}
                              to={item[1]}
                              onClick={() => {
                                  if (item && item.length > 2 && item[2]) {
                                      item[2]();
                                      navigate(item[1]);
                                  }
                              }}
                          >
                              {item[0]}
                          </Link>
                      );
                  })
                : ""}
            {buttonMenu && buttonMenu?.length > 0
                ? buttonMenu.map((item) => (
                      <Link
                          to={item[1]}
                          key={item[0]}
                          className={buttonMenuStyle}
                      >
                          {item[0]}
                      </Link>
                  ))
                : ""}
        </div>
    );
}

export default Menu;
