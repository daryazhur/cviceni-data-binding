import { useState } from 'react';

/*
Zadání 1: Vytvořte stavy pro login a heslo a propojte je obousměrně s příslušnými inputy
  ve formuláři.
Zadání 2: Na formulář pověstě obsluhu události `onSubmit`. Nezapomeňte na `event.preventDefault()`.
  Při odeslání formuláře vytvořte objekt se dvěma vlastnostmi: `login` a `password`,
  které budou obsahovat aktuální hodnoty z inputů. Tento objekt si vypište do konzole.
Zadání 3: Vytvořte si stav `error`, bude obsahovat zprávu pro uživatele, pokud něco vyplní špatně.
  Na začátku bude mít prázdnou hodnotu prázdný řetězec. Zobrazte obsah tohoto stavu v prvku
  `.error`.
Zadání 4: Pokud uživatel nechal prázdné pole s loginem, nastavte při odeslání formuláře do stavu
  `error` text: "Chybí login."
Zadání 5: Pokud uživatel nechal prázdné pole s heslem, nastavte při odeslání formuláře do stavu
  `error` text: "Chybí heslo."
Zadání 6: Pokud uživatel správně vyplnil obě pole, do stavu `error` nastavte text `Přihlášení
  proběhlo úspěšně`.
*/

export const Ukol4 = () => {
  const [login, setLogin] = useState('')
  const [heslo, setHeslo] = useState('')
  const [error, setError] = useState('') //stav pro chyby


  const handleSubmit = (e) => {
    e.preventDefault() // zabránění výchozímu odeslání formuláře

    // kontrola prázdných polí
    if(!login) {
      setError('Chybí login.')
      return
    }

    if(!heslo) {
      setError('Chybí heslo.')
      return
    }

    // pokud je vše v pořádku
    setError('Přihlášení proběhlo úspěšně.')

    //vytvoření objektu s loginem a heslem
    const userData = {
      login: login,
      password: heslo,
    }

    console.log(userData) // výpis do konzole
  }

  
  return (
    <>
      <div className="error">{error}</div> 
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Login:
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
          </label>
        </div>
        <div className="field">
          <label>
            Heslo:
            <input type="password" value={heslo} onChange={e => setHeslo(e.target.value)} />
          </label>
        </div>
        <button type="submit">Přihlásit</button>
      </form>
    </>
  );
};
