<?php
namespace AppBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 *@Route ("/admin/dashboard") 
*/
class DashboardController extends Controller
{
    /**
     *@Route ("/",name="admin_dashboard") 
     */
    public function indexAction(Request $request)
    {
        return $this->render('admin/dashboard/homeDashboard.html.twig', [
        ]);
    }
}