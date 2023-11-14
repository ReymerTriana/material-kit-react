import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './sections/@dashboard/blog/components/BlogPage';
import BuildingsPage from './sections/gestionCodificadores/edificios/components/BuildingsPage';
import CapacitiesPage from './sections/gestionCurso/capacidades/components/CapacitiesPage';
import CareersPage from './sections/gestionCodificadores/carreras/components/CareersPage';
import ClassroomsPage from './sections/gestionCodificadores/aulas/components/ClassroomsPage';
import CoursePage from './sections/gestionCurso/curso/components/CoursePage';
import FacultiesPage from './sections/gestionCodificadores/facultades/components/FacultiesPage';
import IncomeSourcesPage from './sections/gestionCodificadores/fuentesIngreso/components/IncomeSourcesPage';
import OffersPage from './sections/gestionCurso/ofertas/components/OffersPage';
import PdfPage from './sections/reportes/components/PdfPage';
import RequesterPage from './sections/solicitante/components/RequesterPage';
import RequestsPage from './sections/gestionCurso/solicitudes/components/RequestsPage';
import UserPage from './sections/@dashboard/user/components/UserPage';
import LoginPage from './sections/auth/login/LoginPage';
import Page404 from './layouts/404/Page404';
import ProductsPage from './sections/@dashboard/products/components/ProductsPage';
import DashboardLogedInPage from './sections/@dashboard/app/components/DashboardLogedInPage';
import QualificationPage from './sections/procesamiento/calificacion/components/QualificationPage';
import RequalificationPage from './sections/procesamiento/recalificacion/components/RequalificationPage';
import SolicitanteCarrerOptionsForm from './sections/solicitante/components/SolicitanteCarrerOptionsForm';
import SolicitantePersonalDataForm from './sections/solicitante/components/SolicitantePersonalDataForm';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'course', element: <CoursePage /> },
        { path: 'capacities', element: <CapacitiesPage /> },
        { path: 'offers', element: <OffersPage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'faculties', element: <FacultiesPage /> },
        { path: 'buildings', element: <BuildingsPage /> },
        { path: 'classrooms', element: <ClassroomsPage /> },
        { path: 'incomeSources', element: <IncomeSourcesPage /> },
        { path: 'solicitudesConfirmadas', element: <RequestsPage solicitantesConfirmados /> },
        { path: 'solicitudesSinConfirmar', element: <RequestsPage solicitantesConfirmados={false} /> },
        { path: 'qualifications', element: <QualificationPage /> },
        { path: 'requalifications', element: <RequalificationPage /> },
        { path: 'pdfPage1', element: <PdfPage title={'Resumen solicitudes 1ra opción por Carrera'} /> },
        { path: 'pdfPage2', element: <PdfPage title={'Listado de asignaciones en 1era vuelta por carrera'} /> },
        { path: 'pdfPage3', element: <PdfPage title={'Listado de asignaciones en 1era vuelta por estudiante'} /> },
        { path: 'pdfPage4', element: <PdfPage title={'Listado de ubicación de estudiantes'} /> },
        { path: 'pdfPage5', element: <PdfPage title={'Actas de comparecencia'} /> },
        { path: 'pdfPage6', element: <PdfPage title={'Actas de notas'} /> },
        { path: 'pdfPage7', element: <PdfPage title={'Actas de anonimato'} /> },
        { path: 'pdfPage8', element: <PdfPage title={'Listado de notas'} /> },
        { path: 'pdfPage9', element: <PdfPage title={'Listado de asignaciones final por carrera'} /> },
        { path: 'pdfPage10', element: <PdfPage title={'Listado de recalificaciones'} /> },
        { path: 'pdfPage11', element: <PdfPage title={'Actas de reclamación'} /> },
        { path: 'pdfPage12', element: <PdfPage title={'Listado de asignaciones final por estudiante'} /> },
        { path: 'pdfPage13', element: <PdfPage title={'Resumen de asignaciones en 1era opción por carrera'} /> },
        { path: 'pdfPage14', element: <PdfPage title={'Resumen final de asignaciones por carreras'} /> },
        { path: 'app', element: <DashboardLogedInPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/solicitante',
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/solicitante/solicitante-page" />, index: true },
        { path: 'solicitante-page', element: <RequesterPage /> },
        { path: 'formulario-personal-data', element: <SolicitantePersonalDataForm /> },
        { path: 'formulario-carreras', element: <SolicitanteCarrerOptionsForm /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      // define la ruta de entrada de la aplicación
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/solicitante" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
