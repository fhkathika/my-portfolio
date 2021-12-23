import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>React</h1>]
            <p>React Hoks
useState is used to hold state of a functional component.by calling useState we can initialize state.It returns 2 value.first one is initial state and another is the function which will update the state
For example :
Const [ time, setTime]=useState(‘’)
useEffect is used to perform side effect of a component.such as load/fetch data,timer or updating the dom.useEffect receive two parameters. One is function and other is dependency.
Though dependency is optional.It is run every render of component.in the dependency we can set props and state as our need.
useContext mange state globally.passing data without passing manually as a props to go several layer down tree from parent to child component.
useRef is used to store multiple value updating without re rendering.It can make record of previous data
useCallback & useMemo is used to performance optimization.It renders only specific component
				Recat js Vs Vue js

React js
Vue js
1.It is a javascript library
1.It is a framework
2.react js is better with runtime
2vue js is better with memory allowcation
3.facebook,twiter use react js
3.adobe,bmw uses vue.js


				Higher order component
Higher order component is a that take a function in a parameter to make new component
For example:
Const NewConponet=higerOrderFunction(currentComponent)
				Props vs State

props
state
1.we can pass props to other component like parent component to child component
1.State is a own object of a component
2.We can not change the props .That means it is readable only
2.We can change one component object multiple time

Component life cycle
Recat component lifecycle depend on 3 part
mount:It loads data via rendering when user goes another link or event click
update:When there are need changes in data using props or state 
Unmount:When user goes one page to another page previous data disappeared it mean the component is removed from the dom
                             		About JSX
JSX is javascript HTML.Function or method of react always return a view.So tags,attribute we use for making views is called JSX.It looks as an html tag.

Mainly when a function return the view JSX converts into javascript.And the difference between JSX and HTML is that we can write javascript expression within jsx but not in the html





</p>
<div>
    <p>Relational database
A database that depend on one another and connect to watch other.And all data will be in table.and those data has a unique key that interconnect all tables data that is called primary key.Normally bank.schools,univarsities use relational database to store their data
Every field have to be filled in the database.All excel sheets are relational database.

Uses:
1.Best for all OLTP(online Transection Process) Such as:Paytm,GooglePay,HSBC bank,Bank of America,Amazon,Flipcart.It means all transection process.
2.use in web application.most cases use the database called MySql such as :Amazon
3.php ,java based web application
Example:
MySql,Sql,DBMS,IBM DB2,Oracle
Table:
Tables are divided into field,attribute ,tuple,entry
Design of a table called schema that contains in column,index and relation between tables
				Non-Relational database
Non-relational database is noSql.It is not connected to one another.we can make different entry.Its schema free.It means there is no table.It has also a unique key and no fix structure at all.
Advantages:
1.auto scaling possible(add multiple server)
2.hardware is cheaper
3.Perfomance is higher than relational data base.(read/write)
4.uses in online analytical process
Exapmle:
Mongodb,Casandra,Dynamodb,Postgre,redis,raven
				Type of Non-relational databse
1.Columnar Database:saves data as a column such as:Casandro,HBase
2.Document Database:saves data as a document.sometimes we need to store data with description.Like blog,video,movie.then we can use document database.such as:MongoDb,CouchDB,RavenDB
3.Key Value Databse:Redis,Rick,DynamoDB,TokyoCabinet
4.Grapg Based Database:To make graph based data like weather report.(Neo4J,FlockDB)


Node js
Node js is a platform where javascript run into serverside.It is normally used for any kind of non blocking function.
Advantages:
1.Open source as well as flexible framework
2.It supports javascript functions like interfaces,modules,classes

Express js
It is a framework of node js.It is managed serverside.
Uses:
1.develop server side rest Api
2.we can also make web application using express js with template engine like pug
3.Adding we can also use express with react js vue or angular to develop application.express js only manage serverside.




</p>
</div>
        </div>
    );
};

export default Blog;