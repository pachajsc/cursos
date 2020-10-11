import axios from 'axios';
import { course } from '../mock/courses'

export const course = () => {
    
    axios.get('https://api-lcms-staging.iebs.es/api/admin/lesson/162ba658-c3e3-4ad7-aef3-79be46c3ea1e?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmNjk0MmVhMGE4NTRiN2NhMmNlMjNiMWU3OTRjNDE0NiIsImp0aSI6ImJiOWRjY2VjZTYwNmVmMTNhZTllZDJlY2Y1NmQ3ZDI0ZDljMmNhNTQ0MjQ5YjgzZWYzYjlmMzU0MzdlNzI3OGY0ZTkwYWJhZjk1MDQzNzc4IiwiaWF0IjoxNjAyMDk3NTk1LCJuYmYiOjE2MDIwOTc1OTUsImV4cCI6MTYwNDc3NTk5NSwic3ViIjoiYWRtaW5AaWVicy5jb20iLCJzY29wZXMiOlsiYWRtaW4iXSwiZXh0cmEiOnsidXVpZCI6IjFlYWZkYzgyLWIwMjItNjI2Yy04YWZiLTllNjA0ZWVlM2JmYiIsInVwZGF0ZWRBdCI6IjIwMjAtMDktMjNUMTg6MTE6MTQrMDA6MDAifX0.SFIq4UJ2pPlfpmHPXXi5-Fee6zWaO-Hx0bGSbo15HNF-u14j80l5Tnl_yxbC-qwP6XHSixxAItC3n78JZZIiHVN0kNLO8I4B3sstwWDEzap0hVyWjN0xYhkqqS04brGa2SBfbpeTYgZBByrSyNrD1w3fMWUjoMOIPIBgIcA3O0JhwsM11nvhu1cvImYYvrbwycr3Crh_XpTgIuH05ajvDKnOjrnKfUT1oa1FlKr0SGhreFv4g-b3CsqoUDGTtaiOp2A7orFUXbTyzxJFQexbacYozXtJ-dDbJS53nEYSW-Jspc3Kprhsug_WJ1D8n-Crtezi6WEWplKMT7aL9aAJwg')
        .then(result =>{
        return result.data
    }).catch(console.log('error'))
  
      
}