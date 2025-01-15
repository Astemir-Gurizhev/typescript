export default () => {

    type TypeStudent = {
        name: string
        age: number
    }

    const student1:TypeStudent = {
        name: 'Иван',
        age: 18
    }

    const student2:TypeStudent = {
        name: 'Гриша',
        age: 20
    }

    type TypeJob = {
        job: boolean
    }

    type TypeChilds = {
        childs: number
    }

    const MaksimJob:TypeJob = {
        job: true
    }

    const MaksimChilds: TypeChilds = {
        childs: 0
    }

    let Maksim:TypeJob&TypeChilds = {
        ...MaksimJob,
        ...MaksimChilds
    }

    
    let arr:(string|number)[] 
    arr = [3425,'fdgdfg.46',65756]



    return (
        <>
            
        </>
    )
}