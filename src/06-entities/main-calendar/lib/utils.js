/**
 * функция генерирует Id из объекта даты
 * @param value - объект даты
 * @returns {string} - Id даты
 *
 */
export const getDateId = (value) => {
    return  ''+ value.date()+(value.month() + 1)+value.year();
}
