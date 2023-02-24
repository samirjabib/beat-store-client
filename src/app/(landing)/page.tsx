import { useBeatsStore } from '../hooks/useBeatsStore';
import { Hero } from './components/Hero/Hero';

export default async function Page(){

  const {} = useBeatsStore()


  return (
    <div><Hero/></div>
  )
}

