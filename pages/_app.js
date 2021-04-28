import '../styles/globals.css'

export default function App({ Component, pageprops}) {
    return (
        <div>
            <Component{...pageprops}/>
        </div>
    )
}
