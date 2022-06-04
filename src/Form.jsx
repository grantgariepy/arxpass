import React from "react";
const context = React.createContext("");
export function FormInput(props) {
    return <input {...props} name="message"/>;
}
export function FormSubmit({ children, ...props }) {
    return (<button {...props} type="submit">
      {children}
    </button>);
}
export function FormResult(props) {
    const result = React.useContext(context);
    return <p>{result}</p>;
}
export function Form({ onSubmit, children }) {
    const [result, setResult] = React.useState("");
    const submit = async (e) => {
        e.preventDefault();
        const res = await onSubmit(e.currentTarget.elements.message.value);
        if (res)
            setResult(res);
    };
    return (<context.Provider value={result}>
      <form onSubmit={submit}>{children}</form>
    </context.Provider>);
}
