import { useEffect, useState } from "react";

const tabs = ['posts', 'photos', 'todos']

function Content() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [typeTab, setTypeTab] = useState('posts');
  const [isGoToTop, setIsGoToTop] = useState(false);
  const [withBody, setWithBody] = useState(window.innerWidth);

  useEffect(() => {
    document.title = title ? title : 'React App';
  }, [title]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${typeTab}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [typeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 200) {
        setIsGoToTop(true);
      } else {
        setIsGoToTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWithBody(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const onGoToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h5>{withBody}</h5>
      <hr />

      <div>
        {tabs.map((tab, i) => (
          <button key={i}
            onClick={() => setTypeTab(tab)}
            style={typeTab === tab ? { color: '#f54242' } : {}}
          >{tab}</button>
        ))}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      {isGoToTop && (
        <div style={{
          position: 'fixed',
          bottom: 15,
          right: 15
        }}>
          <button onClick={onGoToTop}>
            Top
          </button>
        </div>
      )}
      
    </div>
  );
}

export default Content;
