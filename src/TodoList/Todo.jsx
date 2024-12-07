import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState(() => {
    const storedlist = localStorage.getItem("list");
    return storedlist ? JSON.parse(storedlist) : [];
  });
  const handleDel = (index) => {
    const remove = list.filter((_, i) => i !== index);
    setList(remove);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    document.title = "To-List";
  });
  const handleButton = () => {
    if (text) {
      const Join = [text, ...list];
      setList(Join);
      setText("");
    } else {
      alert("Write something");
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <motion.h1
        title="click here to see wonders"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "20px",
          textDecoration: "underline",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 300,
          delay: 2,
        }}
        whileHover={{ scale: 1.1 }}
      >
        THE ULTIMATE TODO
      </motion.h1>
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 5, delay: 3 } }}
        whileHover={{ scale: 1.1, x: -20 }}
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "20px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
        type="text"
        placeholder="Write something here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <motion.button
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        whileTap={{ scaleX: 0.1 }}
        onClick={handleButton}
        style={{
          border: " none",
          borderRadius: "10px",
          background: "blue",
          padding: "10px",
          color: "white",
        }}
      >
        Add More
      </motion.button>
      <motion.div style={{ margin: "10px" }}>
        {list.map((list, index) => (
          <div key={index}>
            {list}
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 4, type: "spring", stiffness: 200 },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "10px,10px rgba(0,0,0,0.2)",
                transition: { repeat: Infinity },
              }}
              onClick={() => handleDel(index)}
              style={{
                padding: "3px",
                borderRadius: "10px",
                background: "blue",
                marginBottom: "20px",
                marginLeft: "5px",
                color: "white",
                textAlign: "center",
                marginRight: "100px",
              }}
            >
              Delete
            </motion.button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Todo;
