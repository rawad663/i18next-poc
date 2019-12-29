import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TextBlock = () => {
    const { t } = useTranslation();
    const [ moreOpened, setMoreOpened ] = useState(false);

    return (
        <>
            <p>{t('sentences:home.the_initiative_intro')}</p>
            <button onClick={() => setMoreOpened(!moreOpened)}>
                {moreOpened 
                    ? t('sentences:home.hide')
                    : t('sentences:home.find_out_more')}
            </button>

            {moreOpened && <div>
                <p>{t('sentences:home.the_initiative_find_out_more_1')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_2')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_3')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_4')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_5')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_6')}</p>
                <br /><br/>
                <p>{t('sentences:home.the_initiative_find_out_more_7')}</p>
            </div>}
        </>
    );
};

export default TextBlock;