const GIRLS = [
    {
        id: 214425832,
        name: "Lida",
        surname: "Astsatryan",
        age: 19,
        description: "Good pilgrim, you do wrong your hand too much, Which mannerly devotion shows in this;For saints have hands that pilgrims' hands do touch, And palm to palm is holy palmers' kiss.",
        image: "https://pp.vk.me/c622017/v622017786/20428/LH49oTi_aW8.jpg"
    },
    {
        id: 220830381,
        name: "Dasha",
        surname: "Nadolska",
        age: 19,
        description: "Nay, gentlemen, prepare not to be gone; We have a trifling foolish banquet towards. Is it e'en so? why, then, I thank you all I thank you, honest gentlemen; good night. More torches here! Come on then, let's to bed. Ah, sirrah, by my fay, it waxes late: I'll to my rest.",
        image: "https://pp.vk.me/c636620/v636620381/35f64/tN7n75meBkw.jpg"
    },
    {
        id: 138882738,
        name: "Maryna",
        surname: "Kostyk",
        age: 17,
        description: "My only love sprung from my only hate! Too early seen unknown, and known too late! Prodigious birth of love it is to me, That I must love a loathed enemy.",
        image: "https://pp.vk.me/c623831/v623831738/4b700/AWeBQVLSf4I.jpg"
    },
    {
        id: 175335906,
        name: "Inna",
        surname: "Salimonovych",
        age: 18,
        description: "Welcome, gentlemen! ladies that have their toes Unplagued with corns will have a bout with you. Ah ha, my mistresses! which of you all Will now deny to dance? she that makes dainty, She, I'll swear, hath corns; am I come near ye now? Welcome, gentlemen! I have seen the day That I have worn a visor and could tell A whispering tale in a fair lady's ear, Such as would please: 'tis gone, 'tis gone, 'tis gone: You are welcome, gentlemen! come, musicians, play. A hall, a hall! give room! and foot it, girls.",
        image: "https://pp.vk.me/c836122/v836122906/1357f/dlB50O27QwQ.jpg"
    }
];

let GirlsList = React.createClass({
    getInitialState() {
        return {
          count: 0  
        }
        
    },

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    },

    render() {
        let {
            id,
            name,
            surname,
            age,
            description,
            image
        } = this.props;

        return (
            <div className="container clear-fix">
                <h1 className="title">
                    <a href={`https://vk.com/id${id}`} target="_blank">
                        {name} {surname}
                    </a>
                </h1>
                <div className="left-side">
                    <p className="img-block"><img src={image} /></p>
                    <p className="age">Age: {age}</p>
                </div>
                <div className="right-side">
                    <p className="description">{description}</p>
                </div>
                <GirlCount onCount={this.handleClick} count={this.state.count} />
            </div>
        );
    }
});

let GirlCount = React.createClass({
    render() {
        return (
            <div className="footer">
                <p onClick={this.props.onCount}>+</p>
                <p>{this.props.count}</p>
            </div>
        );
    }
});

let GirlsSearch =  React.createClass({
    render() {
        return (
            <div className="container">
                <div className="search">
                    <input type="text" placeholder="Enter name" onChange={this.props.onSearch} />
                </div>
            </div>
        );
    }
});

let GirlsApp = React.createClass({
    getInitialState() {
        return {
            displayedGirls: GIRLS
        }
    },

    handleSearch(e) {
        let searchQuery = e.target.value.toLowerCase();

        let displayedGirls = GIRLS.filter(person => {
            let searchString = person.name.toLowerCase() + person.surname.toLowerCase();

            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedGirls: displayedGirls
        });
    },

    render() {
        let girls = this.state.displayedGirls.map(person => 
            <GirlsList 
                key={person.id}
                id={person.id}
                name={person.name}
                surname={person.surname}
                age={person.age}
                description={person.description}
                image={person.image}
            />
        ); 
        
        return (

            <div>
                <h1 className="logo">People</h1>
                <GirlsSearch onSearch={this.handleSearch} />
                {girls}
                
            </div>
        );
    }
});

const path = document.getElementById('root');

ReactDOM.render(
    <GirlsApp />,
    path
);