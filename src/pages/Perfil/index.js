import React from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import styles from './styles';
//import { FlatList } from 'react-native-gesture-handler';


export default function Perfil() {
    const token = localStorage.getItem('token');
    const [professionalsDet, setProfessionalsDet] = useState([]);
    const [average, setAverage] = useState();
    const professionalsDetId = parseInt(localStorage.getItem('professionalId'));
    //const history = useHistory();



    useEffect(() => {
        api.get(`/professionals/`, {
            headers: {
                'Authorization': `Bearer ` + token
                }
            })
            .then(response => {
                setProfessionalsDet(response.data)  
        })
    }, );

    useEffect(() => {
        api.get(`/avg/professional/${professionalsDetId}`, {
            headers: {
                'Authorization': `Bearer ` + token
                }
            })
            .then(response => {
                setAverage(response.data.average);  
        })
    }, );

    

    console.log(average);

    const avg = parseFloat(average);

    
   /* function handleGoBack() {
        history.go(-1);
    }*/

    return(
      <View>
          
      </View>
    )
}