// hrhub.by: справочник должностей по ОКРБ 014-2017 (часть данных). Подключение: <script src="okrb-data.js"></script>
(function () {
  'use strict';

  const ACCOUNTING = 'Бухгалтерия, финансы и экономика';
  const HR = 'Кадры и делопроизводство';
  const MARKETING = 'Реклама, маркетинг и работа с клиентами';
  const LAW = 'Юриспруденция и закупки';
  const LOGISTICS = 'Логистика, склад и снабжение';
  const OFFICE = 'Офис и управление';

  window.OKRB_DATA = [
    { title: 'Главный бухгалтер', code: '1211-002', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },
    { title: 'Главный экономист', code: '1211-003', issue: 'Выпуск ЕКСД 02', standard: '—', cluster: ACCOUNTING },
    { title: 'Бухгалтер', code: '2411-003', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },
    { title: 'Специалист по налоговому планированию', code: '2412-008', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },
    { title: 'Экономист', code: '2631-015', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },

    { title: 'Менеджер по персоналу', code: '1212-004', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },
    { title: 'Начальник отдела кадров', code: '1212-012', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },
    { title: 'Заведующий канцелярией', code: '1219-008', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },
    { title: 'Специалист по кадрам', code: '2423-003', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },

    { title: 'Менеджер по маркетингу', code: '1221-006', issue: 'Выпуск ЕКСД 32', standard: '—', cluster: MARKETING },
    { title: 'Менеджер по рекламе', code: '1222-006', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: MARKETING },
    { title: 'Специалист по работе с клиентами', code: '2432-002', issue: 'Выпуск ЕКСД 19', standard: '—', cluster: MARKETING },
    { title: 'Агент рекламный', code: '3322-003', issue: 'Выпуск ЕКСД 18', standard: '—', cluster: MARKETING },

    { title: 'Юрист', code: '2611-007', issue: 'Выпуск ЕКСД 00', standard: '—', cluster: LAW },
    { title: 'Юрисконсульт', code: '2619-023', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: LAW },

    { title: 'Начальник отдела организации труда и заработной платы', code: '1211-010', issue: 'Выпуск ЕКСД 02', standard: '—', cluster: ACCOUNTING },
    { title: 'Начальник отдела прогнозирования и экономики', code: '1211-011', issue: 'Выпуск ЕКСД 21', standard: '—', cluster: ACCOUNTING },
    { title: 'Начальник отдела финансового', code: '1211-012', issue: 'Выпуск ЕКСД 02', standard: '—', cluster: ACCOUNTING },
    { title: 'Начальник отдела цен и тарифов', code: '1211-013', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },
    { title: 'Специалист по инвестициям', code: '2412-006', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },
    { title: 'Специалист по внешнеэкономической деятельности', code: '2422-007', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: ACCOUNTING },

    { title: 'Начальник отдела подготовки кадров', code: '1212-015', issue: 'Выпуск ЕКСД 02', standard: '—', cluster: HR },
    { title: 'Заведующий архивом', code: '1219-002', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },
    { title: 'Заведующий бюро копировально-множительным', code: '1219-006', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: HR },

    { title: 'Заведующий складом центральным', code: '1324-030', issue: 'Выпуск ЕКСД 02', standard: '—', cluster: LOGISTICS },
    { title: 'Менеджер отдела материально-технического снабжения', code: '1324-062', issue: 'Выпуск ЕКСД 19', standard: '—', cluster: LOGISTICS },
    { title: 'Специалист по организации закупок', code: '2631-012', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: LOGISTICS },
    { title: 'Агент по закупкам', code: '3323-001', issue: 'Выпуск ЕКСД 19', standard: '—', cluster: LOGISTICS },

    { title: 'Менеджер по качеству', code: '1213-005', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: OFFICE },
    { title: 'Руководитель проекта', code: '1219-021', issue: 'Выпуск ЕКСД 01', standard: '—', cluster: OFFICE }
  ];
})();
