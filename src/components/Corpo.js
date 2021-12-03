import Esquerda from './Esquerda.js';
import Sidebar from './Sidebar.js';

export default function Corpo(){
    return (
        <div class="corpo">
            <Esquerda />

            <Sidebar />
      </div>
    );
}