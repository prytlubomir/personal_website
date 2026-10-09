import { reactive } from 'vue';


let preferredLang = localStorage.getItem('lang');
if (!preferredLang) {
    preferredLang = "en";
}

export const langState = reactive({
    current: preferredLang,
    change() {
        let selected = this.current;
        switch (this.current) {
            case 'en':
                selected = 'ua';
                break;
            case 'ua':
                selected = 'en';
                break
            default:
                console.error('langState', this);
                break
        }
        this.current = selected;
        localStorage.setItem('lang', this.current);
    }
})