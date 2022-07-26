import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Xin chào anh em F8!</h2>
            <h3>Xin chào anh em F8!</h3>
            <h4>Xin chào anh em F8!</h4>
        </div>
    )
}

// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);