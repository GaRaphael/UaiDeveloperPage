import ProductCard from './productCard'
import terno from '../../../public/image/linha_casual.png'

export default function AllProductCategories() {

    const products = [
        {
            name: 'Produto 1',
            image: terno.src,
            price: 'R$ 100,00',
            sizes: ['P', 'M', 'G'],
            colors: [
                { name: 'Preto', hex: '#000000' },
                { name: 'Branco', hex: '#FFFFFF' }
            ]
        },
        {
            name: 'Produto 2',
            image: terno.src,
            price: 'R$ 150,00',
            sizes: ['M', 'G', 'GG'],
            colors: [
                { name: 'Azul', hex: '#0000FF' },
                { name: 'Vermelho', hex: '#FF0000' }
            ]
        },
        {
            name: 'Produto 3',
            image: terno.src,
            price: 'R$ 150,00',
            sizes: ['M', 'GG', 'GGG'],
            colors: [
                { name: 'Azul', hex: '#0000FF' },
                { name: 'Vermelho', hex: '#FF0000' },
                { name: 'Verde', hex: '#00FF00' }
            ]
        },
        {
            name: 'Produto 4',
            image: terno.src,
            price: 'R$ 150,00',
            sizes: ['M', 'G', 'GG'],
            colors: [
                { name: 'Azul', hex: '#0000FF' },
                { name: 'Vermelho', hex: '#FF0000' }
            ]
        },
        {
            name: 'Produto 5',
            image: terno.src,
            price: 'R$ 150,00',
            sizes: ['M', 'G', 'GG'],
            colors: [
                { name: 'Azul', hex: '#0000FF' },
                { name: 'Vermelho', hex: '#FF0000' }
            ]
        },
        {
            name: 'Produto 6',
            image: terno.src,
            price: 'R$ 150,00',
            sizes: ['M', 'G', 'GG'],
            colors: [
                { name: 'Azul', hex: '#0000FF' },
                { name: 'Vermelho', hex: '#FF0000' }
            ]
        },
    ];

    const colors = [
        { name: 'Preto', hex: '#000000' },
        { name: 'Branco', hex: '#FFFFFF' },
        { name: 'Vermelho', hex: '#FF0000' },
        { name: 'Laranja', hex: '#FFA500' },
        { name: 'Amarelo', hex: '#FFFF00' },
        { name: 'Verde', hex: '#008000' },
        { name: 'Azul', hex: '#0000FF' },
        { name: 'Roxo', hex: '#800080' },
        { name: 'Ciano', hex: '#00FFFF' },
        { name: 'Magenta', hex: '#FF00FF' },
        { name: 'Marrom', hex: '#A52A2A' },
        { name: 'Cinza', hex: '#808080' },
        { name: 'Rosa', hex: '#FFC0CB' },
        { name: 'Lavanda', hex: '#E6E6FA' },
        { name: 'Turquesa', hex: '#40E0D0' },
        { name: 'Dourado', hex: '#FFD700' },
        { name: 'Prata', hex: '#C0C0C0' },
        { name: 'Bronze', hex: '#CD7F32' },
        { name: 'Oliva', hex: '#808000' },
        { name: 'Salmon', hex: '#FA8072' },
        { name: 'Salmão Claro', hex: '#FFA07A' },
        { name: 'Aquamarine', hex: '#7FFFD4' },
        { name: 'Tomato', hex: '#FF6347' },
        { name: 'Indigo', hex: '#4B0082' },
        { name: 'Orquídea', hex: '#DA70D6' },
        { name: 'Coral', hex: '#FF7F50' },
        { name: 'Verde Lima', hex: '#00FF00' },
        { name: 'Chocolate', hex: '#D2691E' },
        { name: 'Teal', hex: '#008080' },
        { name: 'Pêssego', hex: '#FFDAB9' }
    ];

    const sizes = ['P', 'M', 'G', 'GG', 'XG', 'XXG'];

    return (
        <div style={{
            display: 'flex',
            marginLeft: '200px',
            marginTop: '200px'
        }}>
            <div>
                <ProductCard products={products} colors={colors} sizes={sizes} />
            </div>
        </div>
    );
};



